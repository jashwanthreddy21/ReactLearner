import Module from '../models/Module.js';
import User from '../models/User.js';

// @desc    Get all modules
// @route   GET /api/modules
// @access  Public
export const getModules = async (req, res) => {
  try {
    const modules = await Module.find({}).sort({ order: 1 }).select('-defaultFiles');
    res.json(modules);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get a single module
// @route   GET /api/modules/:id
// @access  Public
export const getModuleById = async (req, res) => {
  try {
    const module = await Module.findById(req.params.id);

    if (module) {
      res.json(module);
    } else {
      res.status(404).json({ message: 'Module not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Mark module as complete
// @route   POST /api/modules/:id/complete
// @access  Private
export const completeModule = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      if (!user.completedModules.includes(req.params.id)) {
        user.completedModules.push(req.params.id);
        await user.save();
      }
      res.json({ message: 'Module marked as complete' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
