// 如果我们想下载一张图片，可以把这张图片转换成base64格式，然后下载。
const funDownload = (domImg, filename) => {
  // 创建隐藏的可下载链接
  const eleLink = document.createElement('a');
  eleLink.download = filename;
  eleLink.style.display = 'none';
  // 图片转base64地址
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  // const width = domImg.naturalWidth;
  // const height = domImg.naturalHeight;
  if (typeof domImg === 'string') {
    const image = new Image();
    image.src = domImg;
    image.onload = () => {
      context.drawImage(image, 0, 0);
      // 如果是PNG图片，则canvas.toDataURL('image/png')
      eleLink.href = canvas.toDataURL('image/jpeg');
      // 触发点击
      document.body.appendChild(eleLink);
      eleLink.click();
      // 然后移除
      document.body.removeChild(eleLink);
    };
  } else {
    context.drawImage(domImg, 0, 0);
    // 如果是PNG图片，则canvas.toDataURL('image/png')
    eleLink.href = canvas.toDataURL('image/jpeg');
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
  }
};

export default funDownload;
