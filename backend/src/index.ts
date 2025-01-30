module.exports = {
  async bootstrap({ strapi }) {
    try {
      // Run a raw SQL query to update the 'folder_path' field in the 'files' table
      await strapi.db.connection.raw(`
        UPDATE public.files 
        SET folder_path = '/' 
        WHERE folder_path IS NULL;
      `);

      // Log success message
      strapi.log.info(
        "Successfully updated folder_path in files table where it was null."
      );
    } catch (error) {
      // Log error message in case of failure
      strapi.log.error("Error updating folder_path in files table: ", error);
    }
  },
};
