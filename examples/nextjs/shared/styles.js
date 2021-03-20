import style9 from 'style9';

export const { ...sytles } = style9.create({
  body: {
    // contrived example, but with UI Kit would define vars, base styles, theme
    backgroundColor: 'OrangeRed'
  }
});


export const { ...layout } = style9.create({
  center: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
