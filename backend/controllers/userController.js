import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const { JWT_SECRET } = process.env;

export async function userRegister(req, res) {
  try {
    const { email, password } = req.body;
    const admin = await User.findOne({ email: email });
    if (admin) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
    });
    await newUser.save();

    return res.status(201).json({ message: 'registration successful' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function userLogin(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: '1h',
    });

    user.tokens.push({ token });
    await user.save();

    return res.status(200).json({ message: 'Login successful', token: token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
