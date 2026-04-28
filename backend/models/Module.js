import mongoose from 'mongoose';

const moduleSchema = new mongoose.Schema({
  order: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  detailedExplanation: {
    type: String,
    required: true,
  },
  practiceTasks: [{
    task: String,
  }],
  codeExample: {
    type: String,
  },
  quizzes: [{
    question: String,
    options: [String],
    correctAnswer: Number,
  }],
  assignments: [{
    title: String,
    description: String,
  }],
  defaultFiles: {
    type: Object,
    required: true,
  }
}, {
  timestamps: true,
});

const Module = mongoose.model('Module', moduleSchema);

export default Module;
