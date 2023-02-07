const Auction = require('../models/Auction');

module.exports = {
  getAll,
  deleteSingle,
  getSingle,
  updateAuction,
  createAuction,
  placeBid,
};

async function getAll() {
  const data = await Auction.find().lean();
  return data;
}

async function getSingle(id) {
  const data = await Auction.findById(id).populate('author bidder').lean();
  return data;
}

async function deleteSingle(id) {
  await Auction.findByIdAndRemove(id);
}

async function createAuction(
  id,
  { title, category, image, price, description }
) {
  try {
    const auction = new Auction({
      title,
      category,
      image,
      description,
      price,
      author: id,
    });
    await auction.save();
  } catch (error) {
    throw error;
  }
}

async function updateAuction(
  id,
  { title, category, image, price, description }
) {
  try {
    const existing = await this.getSingle(id);
    existing.title = title;
    existing.category = category;
    existing.image = image;
    existing.price = Number(price);
    existing.description = description;
    await existing.save();
  } catch (error) {
    throw error;
  }
}

async function placeBid(userId, auctionId, { bidPrice }) {
  try {
    const auction = await Auction.findById(auctionId);
    if (bidPrice <= auction.price) {
      throw new Error('The bid amount has to be more than the current price');
    }
    auction.price = Number(bidPrice);
    auction.bidder.push(userId);
    await auction.save();
  } catch (error) {
    throw error;
  }
}
