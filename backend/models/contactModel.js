// models/contactModel.js
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  services: { type: [String], required: true },
  budget: { type: String, required: true },
  discoverySource: { type: String, required: true },
  message: { type: String, required: true },
  ipAddress: { type: String },
  userAgent: { type: String }
}, {
  timestamps: true
});

// Add indexes
contactSchema.index({ email: 1 });
contactSchema.index({ ipAddress: 1 });
contactSchema.index({ createdAt: -1 });

export default mongoose.model("Contact", contactSchema);





// import mongoose from "mongoose";

// const contactSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   phone: String,
//   services: [String],
//   budget: String,
//   discoverySource: String,
//   message: String,
// }, { timestamps: true });

// export default mongoose.model("Contact", contactSchema);
