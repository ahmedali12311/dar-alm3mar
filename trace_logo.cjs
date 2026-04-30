const { Jimp } = require('jimp');
const potrace = require('potrace');
const fs = require('fs');

async function trace() {
  const image = await Jimp.read('public/images/logo.jpg');
  potrace.trace(image.bitmap, function(err, svg) {
    if (err) throw err;
    fs.writeFileSync('public/images/logo.svg', svg);
    console.log("Done. Saved to public/images/logo.svg");
  });
}
trace();
