const dummy = () => {};

export const click = ( srv ) => {
  console.log();
  srv.to( 119 );
};

export const unclick = ( srv ) => {
  srv.to( 90 );
};

export const clickDebug = ( srv ) => {
  srv.to( 105 );
};

export const moveRight = ( stpr ) => {
  stpr.step( {
    steps: 100,
    direction: 0,
  }, dummy );
};

export const moveLeft = ( stpr ) => {
  stpr.step( {
    steps: 100,
    direction: 1,
  }, dummy );
};
