// AppwriteSetup.js
import { Client, Account, Databases } from 'appwrite';

// Initialize Appwrite Client
const client = new Client();
client
  .setEndpoint('http:///cloud.appwrite.io/v1')  // Replace with your Appwrite endpoint
  .setProject('6735b5f6001bd214b0a7');  // Replace with your Appwrite project ID

const account = new Account(client);
const databases = new Databases(client);

// Database and Collection IDs
const DATABASE_ID = '6735d15100110090e738'; // Your database ID
const COLLECTION_ID = '6735d15a002375826bf8'; // Your collection ID

// Function to Create or Update User Profile
const createUserProfile = async (userData) => {
  try {
    const userId = userData.userId; // Unique identifier for the user
    const data = {
      name: userData.name,
      email: userData.email,
      profile_picture: userData.profile_picture,
    };

    const response = await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      userId,  // Unique user ID as the document ID
      data
    );

    console.log('User profile created/updated:', response);
  } catch (error) {
    console.error('Error saving user profile:', error);
  }
};

// Function to Retrieve User Profile
const getUserProfile = async (userId) => {
  try {
    const response = await databases.getDocument(
      DATABASE_ID,
      COLLECTION_ID,
      userId
    );

    console.log('User profile data:', response);
    return response;
  } catch (error) {
    console.error('Error retrieving user profile:', error);
  }
};

// Export all necessary modules
export { client, account, databases, createUserProfile, getUserProfile };
