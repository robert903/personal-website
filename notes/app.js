(function() {
  var app;

  app = angular.module('notes', []);

  app.controller('mainCtrl', function() {
    this.isClicked = true;
    this.isDeleted = false;
    this.notes = [
      {
        name: "First name",
        body: "First body"
      }, {
        name: "Second name",
        body: "Second body"
      }
    ];
    this.noteCount = this.notes.length;
    this.addNote = function() {
      this.notes.push(this.note);
      return this.note = {};
    };
  });

  $(document).ready(function() {
    $('.add').click(function() {
      $(this).toggleClass('rotate');
    });
    $('.add-button').click(function() {
      $('.add').toggleClass('rotate');
    });
  });

}).call(this);

