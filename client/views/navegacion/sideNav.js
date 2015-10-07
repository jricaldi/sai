Template.sideNav.onRendered(function(){
  this.$('.collapsible').collapsible();
});

Template.sideNav.events({
  // "click ul li.bold ul>li>a": function(event, template){
  //   $('.button-collapse').sideNav('hide');
  // }
});
