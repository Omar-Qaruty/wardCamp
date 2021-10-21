const Campground = require('../../models/campground');
// const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
// const mapBoxToken = process.env.MAPBOX_TOKEN;
// const geocoder = mbxGeocoding({ accessToken: mapBoxToken });
// const { cloudinary } = require("../cloudinary");


allCamps = async (req, res) =>
{
    // const campgrounds = await Campground.find({}).populate('popupText');
    const campgrounds = await Campground.find({})
    const count = await Campground.count()
    res.json({ count, data: { campgrounds } })
}
module.exports = {
    allCamps
}