import './menu-button.scss';

const rotate = _ => {
    _.addEventListener('click', function() {
       _.classList.toggle('panel__menu-button_rotate_clockwise');
    });
};

export const menuButton = {
    initDelayed: () => {},
    init: (_, evt, cb)=> {
        rotate(_);
        _.addEventListener(evt, cb);
    }
};