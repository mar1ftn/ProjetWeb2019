import mongoose from 'mongoose'; 
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);

const HorsPisteSchema = new Schema({  
  nom: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  stationName: {
    type: String,
    required: true
  },
    difficulte:{
        type: Number,
        required: true
    }
},
{
  timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
});

module.exports = mongoose.model('HorsPiste', HorsPisteSchema);  