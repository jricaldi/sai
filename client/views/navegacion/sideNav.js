Template.sideNav.onRendered(function(){
  this.$('.collapsible').collapsible();
});

Template.sideNav.events({
  "click #mobileNavBar div.collapsible-body li": function(event, template){
    $("#mobileNavBar div.collapsible-body li").removeClass("active indigo accent-2")
    $(event.currentTarget).addClass("active indigo accent-2");
  }
});
