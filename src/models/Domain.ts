// import mongoose from 'mongoose';

// const domainSchema = new mongoose.Schema({
//   domainName: { type: String, required: true },
//   status: { type: String, enum: ['Active', 'Inactive', 'Pending'], required: true },
//   customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
//   registrarName: { type: mongoose.Schema.Types.ObjectId, ref: 'Registrar' },
//   managedBy: { type: String, enum: ['Signroots', 'Customer'], required: true },
//   registrationDate: { type: Date, required: true },
//   expiryDate: { type: Date, required: true },
//   nameServers: [{ type: String }],
//   dnsDetails: [{ type: String }],
//   lockStatus: { type: String, enum: ['Locked', 'Unlocked'], default: 'Locked' },
// }, { timestamps: true });

// export default mongoose.model('Domain', domainSchema);
import mongoose from 'mongoose';

const domainSchema = new mongoose.Schema({
  domainName: { type: String, required: true },
  status: { type: String }, // flexible string instead of enum
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  registrarName: { type: mongoose.Schema.Types.ObjectId, ref: 'Registrar' },
  managedBy: { type: String, enum: ['Signroots', 'Customer'], required: true },
  registrationDate: { type: Date, required: true },
  expiryDate: { type: Date, required: true },
  nameServers: [{ type: String }],
  dnsDetails: [{ type: String }],
  lockStatus: { type: String }, // flexible string
}, { timestamps: true });

export default mongoose.model('Domain', domainSchema);