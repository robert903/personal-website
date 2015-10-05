app = angular.module('notes', [])
app.controller('mainCtrl' , () ->
	this.isClicked = true
	this.isDeleted = false
	this.notes = [{
		name: "Example one"
		body: "Example body"
	},
	{
		name: "Example two"
		body: "Example body"
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
	$('.info-but').click(() ->
		$('.info').show()
		$(this).hide()
		return
		)
	$('.info-close-but').click(() ->
		$('.info').hide()
		$('.info-but').show()
		return
		)
	return
	)