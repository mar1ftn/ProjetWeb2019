import mongoose from 'mongoose'; 
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);

const StationSchema = new Schema({  
    nom: {
        type: String,
        required: true,
        unique: true
    },
    massifName: {
        type: String,
        required: true
    },
    nb_piste: {
        type: Number,
        required: true
    },
    nb_horspiste: {
        type: Number,
    },
    nb_kilometre: {
        type: Number,
        required: true
    },
},
{
  timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
});

module.exports = mongoose.model('Station', StationSchema);  