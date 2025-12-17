function ChangeImage() {
  const image = document.querySelector('#images');

  const Url = prompt('Enter the image URL');
  const bordercolor = prompt('Enter the border Color');
  const width = prompt('Enter the width ');
  const height = prompt('Enter the height ');
  const borderradius = prompt('Enter the border radius');

  image.setAttribute('src', Url);
  image.style.border = `2px solid ${bordercolor}`;
  image.style.width = `${width}px`;
  image.style.height = `${height}px`;
  image.style.borderRadius = `${borderradius}px`;
  image.style.padding = "10px";
  image.style.backgroundColor = '#cfc2dc';
}