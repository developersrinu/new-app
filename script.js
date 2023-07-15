// Function to fetch menu items from JSON and display them on the menu page
async function getMenu() {
    try {
        const response = await fetch('menu,json');
        const data = await response.json();

        const menuItemsContainer = document.querySelector('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
        data.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            menuItem.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p class="price">$${item.price}</p>
            `;
            menuItemsContainer.appendChild(menuItem);
        });
    } catch (error) {
        console.log('Error fetching menu items:', error);
    }
}

// Function to simulate order taking process
function takeOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const burgers = ['Cheeseburger', 'Chicken Burger', 'Veggie Burger'];
            const order = {
                burgers: burgers.sort(() => 0.5 - Math.random()).slice(0, 3)
            };
            resolve(order);
        }, 2500);
    });
}

// Function to simulate order preparation
function orderPrep() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ order_status: true, paid: false });
        }, 1500);
    });
}

// Function to simulate payment process
function payOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ order_status: true, paid: true });
        }, 1000);
    });
}

// Function to display thank you message
function thankyouFnc() {
    alert('Thank you for eating with us today!');
}

// Event listener for place order button
const orderButton = document.querySelector('.order-button');
orderButton.addEventListener('click', async () => {
    try {
        const order = await takeOrder();
        const orderStatus = await orderPrep();
        const paymentStatus = await payOrder();

        thankyouFnc();
    } catch (error) {
        console.log('Error in order process:', error);
    }
});

// Fetch menu items on page load
document.addEventListener('DOMContentLoaded', async () => {
    await getMenu();
});
