function Intro() {
  return (
    <div className="intro">
      <h1 className="titre">Duels in hogwarts</h1>
      <img
        className="imgIntro"
        src="../src/assets/images/Harrypotter.png"
        alt="Fond"
      />
      <p>
        Welcome to the wizarding arena, where two wizards face off in an epic
        duel of spells and strategies. Choose your character, master your
        incatations and challenge your opponent in an unprecedented magical
        battle. Prepare to demonstrate your supremacy in this legendary clash.
      </p>
      <p className="WizardWin">May the best wizard win !</p>
      <div className="line"> </div>
    </div>
  );
}

export default Intro;
