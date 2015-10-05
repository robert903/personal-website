(function() {
  var app;

  app = angular.module('notes', []);

  app.controller('mainCtrl', function() {
    this.isClicked = true;
    this.isDeleted = false;
    this.notes = [
      {
        name: "Example one",
        body: "Example body"
      }, {
        name: "Example two",
        body: "Example body"
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
    $('.info-but').click(function() {
      $('.info').show();
      $(this).hide();
    });
    $('.info-close-but').click(function() {
      $('.info').hide();
      $('.info-but').show();
    });
  });

}).call(this);

