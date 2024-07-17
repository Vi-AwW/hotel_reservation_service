document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const roomType = document.getElementById('room-type').value;
    
    const confirmationMessage = `
        Дякуємо, ${name}! Ваше бронювання підтверджено.
        Інформація:
        - Email: ${email}
        - Дата заїзду: ${checkin}
        - Дата виїзду: ${checkout}
        - Тип номера: ${roomType}
    `;
    
    document.getElementById('confirmation-message').innerText = confirmationMessage;
    document.getElementById('booking-form').style.display = 'none';
    document.getElementById('booking-confirmation').style.display = 'block';
});
