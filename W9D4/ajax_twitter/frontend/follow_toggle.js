class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.followState = this.$el.data().initialFollowState; 
    this.userId = this.$el.data().userId;
    this.render();
    this.$el.on("click", this.handleClick.bind(this));
  }

  render () {
    if(!this.followState) {
      this.$el.text("Follow!");
    } else {
      this.$el.text("Unfollow!");
    }
  }

  handleClick (e) {
    e.preventDefault();
    if (!this.followState) {
      return $.ajax ({
        method: "POST",
        url: `/users/${this.userId}/follow`,
        dataType: 'JSON',
        success: (res) => {
          this.followState = !this.followState;
          this.render();
        }

      });
    } else {
      return $.ajax ({
        method: 'DELETE',
        url: `/users/${this.userId}/follow`,
        dataType: 'JSON',
        success: (res) => {
          this.followState = !this.followState;
          this.render();
        }
      });
    }
  }
}


module.exports = FollowToggle; 