// Schema definition
import mongoose, { Document, Schema } from "mongoose"; 

/**
 * We need two similar constructs here because Mongoose requires both an interface and a schema to define a model. 
 * The interface is used to define the shape of the data that is stored in the database, while the schema is used to validate the data that is stored in the database.
 */

// Define the schema
export interface IIntro extends Document {
  name: string;
  email: string;
  phone: string;
  linkedIn: string;
  github: string;
}

// Schema from the intro data
const IntroSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  linkedIn: { type: String, required: true },
  github: { type: String, required: true },
}, { collection: 'Portfolio.Intro' }); // explicitly state Colletion name 'Intro'

// Create a model based on the schema
const Intro = mongoose.model<IIntro>('Intro', IntroSchema);

export default Intro;


