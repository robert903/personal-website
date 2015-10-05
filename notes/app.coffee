app = angular.module('notes', [])
app.controller('mainCtrl' , () ->
	this.isClicked = true
	this.isDeleted = false
	this.notes = [{
		name: "First name"
		body: "First body"
	},
	{
		name: "Second name"
		body: "Second body"
	}]
	this.noteCount = this.notes.length
	this.addNote = ->
		this.notes.push(this.note)
		this.note = {}
	return
)

$(document).ready(() ->
	$('.add').click(() ->
		$(this).toggleClass('rotate')
		return
		)
	$('.add-button').click(() ->
		$('.add').toggleClass('rotate')
		return
		)
	return
	)