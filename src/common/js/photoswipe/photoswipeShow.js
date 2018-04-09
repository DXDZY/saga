/* eslint-disable */
import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from './photoswipe-ui-default';
var initPhotoSwipeFromDOM = function (gallerySelector) {

    // parse slide data (url, title, size ...) from DOM elements 
    // (children of gallerySelector)
    var parseThumbnailElements = function (el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for (var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes 
            if (figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0]; // <a> element

            size = linkEl.getAttribute('data-size').split('x');

            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };



            if (figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML;
            }

            if (linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            }

            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn));
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function (e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedListItem = closest(eTarget, function (el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });

        if (!clickedListItem) {
            return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if (childNodes[i].nodeType !== 1) {
                continue;
            }

            if (childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }



        if (index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe(index, clickedGallery);
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function () {
        var hash = window.location.hash.substring(1),
            params = {};

        if (hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if (!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if (pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }

        if (params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);

        // define options (if needed)
        options = {

            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function (index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return {
                    x: rect.left,
                    y: rect.top + pageYScroll,
                    w: rect.width
                };
            },
            showHideOpacity: true,
            bgOpacity: 0.7, //遮罩层
            spacing: 0.1, //幻灯片之间的间距比
            allowPanToNext: true, //当前项目被放大时，允许滑动导航到下一个/上一个项目
            maxSpreadZoom: 2, //执行传播（缩放）手势时的最大缩放级别
            loop: false, //使用轻扫手势时循环滑动。如果设置为true您可以从最后一个图像刷到第一个图像。选项总是false少于3张幻灯片。
            pinchToClose: false, //捏合以关闭画廊手势。用户缩小后，画廊的背景将逐渐淡出。手势完成后，画廊将关闭。
            closeOnScroll: false, //在页面滚动上关闭图库。该选项仅适用于没有硬件触摸支持的设备。
            closeOnVerticalDrag: true, //垂直拖动和图像未缩放时关闭图库。总是false在使用鼠标时。
            escKey: true, //esc键盘键来关闭PhotoSwipe
            arrowKeys: true, //键盘向左或向右箭头键导航
            history: false, //如果设置为false禁用历史模块（后退按钮关闭图库，每个幻灯片的唯一URL）。你也可以history.js从你的版本中排除模块。
            errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">图片</a>加载失败</div>', //图像未加载时的错误消息。%url%将被图像的URL替换。
            preload: [1, 1], //根据移动方向延迟加载附近的幻灯片。应该是一个具有两个整数的数组，第一个数组 - 当前图像之前预加载的项目数量，第二个 - 当前图像之后的数量。例如，如果将它设置为[1,3]，它将在当前之前加载1张图像，在当前之后加载3张图像。值不能小于1。
            zoomEl: true,
            shareEl:false,
            fullscreenEl:false,
            tapToToggleControls: false,
            // shareButtons: [
            //     {id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'},
            //     {id:'twitter', label:'Tweet', url:'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'},
            //     {id:'pinterest', label:'Pin it', url:'http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}'},
            //     {id:'download', label:'Download image', url:'{{raw_image_url}}', download:true}
            // ],
            // clickToCloseNonZoomable: false,
            // arrowEl:false,
            // tapToClose:true,
            // clickToCloseNonZoomable:false,
            // mainClass:'',//带有将被添加到PhotoSwipe（.pswp）的根元素的类的名称的字符串。可以包含多个以空格分隔的类。
            // galleryPIDs:true,//为形成URL时使用的每个幻灯片对象启用自定义ID。如果选项集设置为true，则幻灯片对象必须具有pid（图片标识符）属性，该属性可以是字符串或整数。例如：
            // var slides = [
            //     {
            //         src: 'path/to/1.jpg',
            //         w:500,
            //         h:400,
            //         pid: 'image-one'
            //     },
            //     {
            //         src: 'path/to/2.jpg',
            //         w:300,
            //         h:700,
            //         pid: 'image-two'
            //     },

            //     ... 
            // ];
            // ...第二张幻灯片将有URL http://example.com/#&gid=1&pid=image-two。

            // galleryUID:1//图库唯一ID。形成URL时由历史模块使用。例如，UID 1画廊的第二张照片将有网址：http://example.com/#&gid=1&pid=2。

            // mouseUsed:true,//选项允许您预定义鼠标是否被使用。
            // getDoubleTapZoom:function(isMouseClick, item) {

            //     // isMouseClick          - true if mouse, false if double-tap
            //     // item                  - slide object that is zoomed, usually current
            //     // item.initialZoomLevel - initial scale ratio of image
            //     //                         e.g. if viewport is 700px and image is 1400px,
            //     //                              initialZoomLevel will be 0.5

            //     if(isMouseClick) {

            //         // is mouse click on image or zoom icon

            //         // zoom to original
            //         return 1;

            //         // e.g. for 1400px image:
            //         // 0.5 - zooms to 700px
            //         // 2   - zooms to 2800px

            //     } else {

            //         // is double-tap

            //         // zoom to original if initial zoom is less than 0.7x,
            //         // otherwise to 1.5x, to make sure that double-tap gesture always zooms image
            //         return item.initialZoomLevel < 0.7 ? 1 : 1.5;
            //     }
            // },//功能应返回双击手势后图像缩放到的缩放级别，或用户单击缩放图标或鼠标单击图像本身时的缩放级别。如果您返回的1图像将被放大到其原始大小
        };

        // PhotoSwipe opened from URL
        if (fromURL) {
            if (options.galleryPIDs) {
                // parse real index when custom PIDs are used 
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for (var j = 0; j < items.length; j++) {
                    if (items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if (isNaN(options.index)) {
            return;
        }

        if (disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll(gallerySelector);

    for (var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i + 1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
        openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
    }
};

export default initPhotoSwipeFromDOM;