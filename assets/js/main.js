var photo = '';
var nameU = '';
var lastMessage = '';
var positionLastMessage = 0;
$(document).ready(function () {
  $('#botonSend').click(function () {
    var mensaje = $('#mensaje').val();
    $('#mensaje').val("");

    var contenedor = $('.showMessage');
    contenedor.append('<div>' + '<p>' + mensaje + '</p>' + '</div>');
  });
  for (var i = 0; i < data.length; i++) {
    photo = '';
    nameU = '';
    lastMessage = '';
    photo = data[i].foto;
    nameU = data[i].nameU;
    positionLastMessage = 0;
    positionLastMessage = data[i].mensajes.length - 1;
    lastMessage = data[i].mensajes[positionLastMessage].texto;
    var contacto = $("<div>", { 'class': 'contacto' });
    var photoName = $("<div>", { 'class': 'photoName' });
    photoName.append('<img src ="' + data[i].foto + '"/>' + '<p>' + data[i].nameU + '</p>');
    contacto.append(photoName);
    var lastMessageBox = $("<div>", { 'class': 'lastMessage' });
    lastMessageBox.append('<p>' + lastMessage + '</p>');
    contacto.append(lastMessage);
    $('.contacts').append(contacto);


    // .append('<img src ="' + data[i].foto + '"/>' + '<p>' + data[i].nameU + '</p>' + '<p>' + lastMessage + '</p>'));
  }



});












