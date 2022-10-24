


window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'q':
            q = 1;
            break;
        case 'w':
            w = 1;
            break;
        case 'e':
            t = 1;
            break;
        case 'r':
            r = 1;
            break;
    }
})



function egg_down(egg) {
    egg_current_position = parseInt(egg.css('top'));
    egg.css('top', egg_current_position + speed);
}

function check_egg_hits_floor(egg) {
    if (collision(egg, floor)) {
        decrement_life();
        return true;
    }
    
}

function set_egg_to_initial_position(egg) {
    egg.css('top', egg_initial_position);
    q = 0;
    w = 0;
    t = 0;
    r = 0;
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
    if (collision(egg, basket)&&(q == 1)) {
            update_score();
            return true;
        
    } else if (collision(egg, basket1)&&(w == 1)) {
        update_score();
        return true;
    
}
    else if (collision(egg, basket2)&&(t == 1)) {
        update_score();
        return true;

}
    else if (collision(egg, basket3)&&(r == 1)) {
        update_score();
        return true;

}
    return false;
}

function update_score() {
    score++;
    if (score % 15 === 0 && speed <= max_speed) {
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