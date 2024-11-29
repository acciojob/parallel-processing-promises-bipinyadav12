
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];
function displayImage(url){
	const image=document.createElement("img");
	image.src=url;
	image.alt="Loaded image"
	output.appendChild(image)
}
function downloadImage(image) {
return new Promise ((resolve,reject)=>{
	const img=new Image()
	img.src=image.url;
	  img.onload = () => resolve(image.url);
    img.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`));
})	;
}
btn.addEventListener("click", async () => {
  output.innerHTML = ""; 
  for (const image of images) {
    try {
      const url = await downloadImage(image);
      displayImage(url);
    } catch (error) {
      console.error(error.message);
    }
  }
});