
let postac = document.querySelector('#basket');
let moveBy = 14;

window.addEventListener('load', () => {
    postac.getElementsByClassName.position = 'absolute';
    postac.style.left = 0;
});
 
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            postac.style.left = parseInt(postac.style.left) - moveBy + '%';
            break;
        case 'ArrowRight':
            postac.style.left = parseInt(postac.style.left) + moveBy + '%';
            break;
    }
})



function egg_down(egg) {
    egg_current_position = parseInt(egg.css('top'));
    egg.css('top', egg_current_position + speed);
}

function check_egg_hits_floor(egg) {
    if (collision(egg, floor)) {
        update_score();
        return true;
    }
    
}

function set_egg_to_initial_position(egg) {
    egg.css('top', egg_initial_position);
}

function show_bulls_eye(egg) {
    bullseye_num = egg.attr('data-bullseye');
    $('#bullseye' + bullseye_num).show();
    hide_bulls_eye(bullseye_num);
}

function hide_bulls_eye(bullseye_num) {
    setTimeout(function () {
        $('#bullseye' + bullseye_num).hide();
    }, 800);
}

function decrement_life() {
    life--
    life_span.text(life);
    score_span.text(score);
    score_1.text(score);
}

function check_egg_hits_basket(egg) {
    if (collision(egg, basket)) {
            decrement_life();
            return true;
        
    }
    return false;
}

function update_score() {
    score++;
    if (score % 12 === 0 && speed <= max_speed) {
        speed++;
    }
    score_span.text(score);
    score_1.text(score);
}

function stop_the_game() {
    cancelAnimationFrame(anim_id);
    restart.slideDown();
}

restart.click(function () {
    location.reload();
});