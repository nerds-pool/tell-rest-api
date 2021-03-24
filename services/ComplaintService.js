/**
 * @module service/complaint
 * @requires module:model/complaint
 */

const Complaint = require("../models/Complaint");

/**
 * Create a new complaint [User]
 * @async
 * @param {Object} payload
 * @returns {defaultReturnType}
 */
exports.createNewComplaint = async (payload) => {
  try {
  } catch (error) {
    return { result: error.message, success: false };
  }
};

/**
 * Update complaint status [Admin|Authority]
 * @async
 * @param {ObjectId} complaintId
 * @param {String} complaintState
 * @returns {defaultReturnType}
 */
exports.updateComplaintStatus = async (complaintId, complaintState) => {
  try {
  } catch (error) {
    return { result: error.message, success: false };
  }
};

/**
 * Confirm when a complaint processing is done [User]
 * @async
 * @param {ObjectId} complaintId
 * @param {ObjectId} complainerId
 * @returns {defaultReturnType}
 */
exports.confirmProgressDone = async (complaintId, complainerId) => {
  try {
  } catch (error) {
    return { result: error.message, success: false };
  }
};

/**
 * Get a single complaint by its id [Admin|Authority|User]
 * @async
 * @param {ObjectId} complaintId
 * @returns {defaultReturnType}
 */
exports.getComplaintById = async (complaintId) => {
  try {
  } catch (error) {
    return { result: error.message, success: false };
  }
};

/**
 * Get all complaints by its category [Admin|Authority]
 * @async
 * @param {String} complaintCategory
 * @returns {defaultReturnType}
 */
exports.getAllComplaintsByCategory = async (complaintCategory) => {
  try {
  } catch (error) {
    return { result: error.message, success: false };
  }
};

/**
 * Get all complaints by its city [User]
 * @async
 * @param {String} city
 * @returns {defaultReturnType}
 */
exports.getAllComplaintsByCity = async (city) => {
  try {
  } catch (error) {
    return { result: error.message, success: false };
  }
};

/**
 * Get all complaints by its district [Authority]
 * @async
 * @param {String} district
 * @returns {defaultReturnType}
 */
exports.getAllComplaintsByDistrict = async (district) => {
  try {
  } catch (error) {
    return { result: error.message, success: false };
  }
};

/**
 * Gett all complaints [Admin]
 * @async
 * @returns {defaultReturnType}
 */
exports.getAllComplaintsForAdmin = async () => {
  try {
  } catch (error) {
    return { result: error.message, success: false };
  }
};

/**
 * Get all complaints by status
 * @async
 * @param {String} complaintState
 * @returns {defaultReturnType}
 */
exports.getAllComplaintsByStatusForAdmin = async (complaintState) => {
  try {
  } catch (error) {
    return { result: error.message, success: false };
  }
};

/**
 * Get all complaints by status
 * @async
 * @param {ObjectId} authorityId
 * @param {String} complaintState
 * @returns {defaultReturnType}
 */
exports.getAllComplaintsByStatusForAuthority = async (
  authorityId,
  complaintState
) => {
  try {
  } catch (error) {
    return { result: error.message, success: false };
  }
};

/**
 * Delete a complaint [Admin|?=System]
 * @async
 * @param {ObjectId} complaintId
 * @returns {defaultReturnType}
 */
exports.deleteComplaint = async (complaintId) => {
  try {
  } catch (error) {
    return { result: error.message, success: false };
  }
};
