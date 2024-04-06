const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlenth: 1,
      maxlength: 280,
    },
    //   - Set default value to the current timestamp
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => new Date(timestamp).toLocaleString(),
    },
    username: {
      type: String,
      required: true,
    },
    // - `reactions` (These are like replies)
    //   - Array of nested documents created with the `reactionSchema`
    reactions: [reactionSchema],
  },
  {
    //   - Use a getter method to format the timestamp on query
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);
// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

//export the model
module.exports = Thought;
