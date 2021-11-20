function newItem() {

    // This code adds a new item list
      let li = $('<li></li>');
      let inputValue = $('#input').val();
      li.append(inputValue);
    
      if(inputValue === '') {
        alert(`Your input is empty, please write something.`);
      } else {
        $('#list').append(li);
        $('#input').val('')
      }
    
    // This code crosses out the lines
      function crossOut() {
        li.toggleClass('strike');
      }
    
      li.on('dblclick', crossOut);
    
    // This code adds a delete button
       let crossOutButton = $('<crossOutButton></crossOutButton>');
      crossOutButton.append(document.createTextNode('X'));
      li.append(crossOutButton);
    
      function deleteListItem() {
        li.addClass('delete');
      }
      crossOutButton.on('click', deleteListItem);
    
      $('#list').sortable()
    }