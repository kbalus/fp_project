const cloudName = "dswdh6dlv";
const myGallery = cloudinary.galleryWidget({
  container: "#gallery",
  cloudName: cloudName,
  mediaAssets: [
    { tag: "fp_project" },
  ],
});

myGallery.render();