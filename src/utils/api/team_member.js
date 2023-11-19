class TEAM_MEMBER {
    constructor(apiUrl) {
      this.apiUrl = apiUrl;
    }
    /****************************************
   * GET ALL TEAM MEMBER API START HERE
   ****************************************/
    async get_team_member() {
      try {
        const response = await fetch(this.apiUrl);
        if (response.ok) {
          return await response.json();
        } else {
          throw new Error('Failed to fetch team_member.');
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
  export default TEAM_MEMBER;
  // $table->string('team_member_first_name', 255);
// $table->string('team_member_last_name', 255);
// $table->string('team_member_email', 100);
// $table->string('team_member_phone_number', 15);
// $table->string('team_member_role', 255);
// $table->string('team_member_department', 255);
// $table->text('team_member_social_url');
// $table->string('team_member_hire_date', 255);
// $table->text('team_member_bio');
// $table->string('team_member_profile_image', 255);
// $table->boolean('is_visible');
// $table->boolean('status');