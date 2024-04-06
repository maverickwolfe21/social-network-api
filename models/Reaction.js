// **Reaction** (SCHEMA ONLY)
const { Schema, Types } = require("mongoose");

//   - Use Mongoose's ObjectId data type
const reactionSchema = new Schema(
  {
    //   - Default value is set to a new ObjectId
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlenth: 280,
    },
    username: {
      type: String,
      required: true,
    },
    //   - Set default value to the current timestamp
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => new Date(timestamp).toLocaleDateString(),
    },
  },
  {
    //   - getter method to format the timestamp on query
    toJSON: {
      getters: true,
    },
    id: false,
  }
);
//export the model
module.exports = reactionSchema;
