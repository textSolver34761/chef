function goBack() {
    window.history.go(-1);
}

var conversationalForm = window.cf.ConversationalForm.startTheConversation({
  formEl: document.getElementById("form"),
  context: document.getElementById("cf-context"),
  userImage: "/Chef/Ressources/Avatar/default.png",
  robotImage:
    "/Chef/Ressources/Avatar/PhotoID.jpg",
  submitCallback: function() {
    alert(
      "Custom submit callback reached, removing Conversational Form, see markup of this file"
    );
  }
});