import mongoose from 'mongoose'; 
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);

const MassifSchema = new Schema({  
  nom: {
    type: String,
    required: true,
    unique: true
  },
  nb_station: {
    type: Number,
    default: 0
  },
    nb_kilometre: {
        type: Number,
        default: 0
    },
},
{
  timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
});


MassifSchema.methods.sucemabite = function () {
    
};

module.exports = mongoose.model('Massif', MassifSchema);  