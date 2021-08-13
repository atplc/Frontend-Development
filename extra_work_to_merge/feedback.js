function toggleForm(ref){
    ref.classList.toggle('active');
    document.getElementById('feedback-form').classList.toggle('active');
  }
  function closeForm(ref){
    document.getElementById('edit-btn').classList.remove('active');
    document.getElementById('feedback-form').classList.remove('active');
  }
  
  function submitFeedback(){
    //validate form fields
    document.getElementById('feedback-form').classList.add('send');
    setTimeout(function(){
      document.getElementById('edit-btn').style.display="none";
      document.getElementById('feedback-form').style.display="none";    
    },500);
  }