class YapeModel {
	constructor () {
		this.notify = null;
		this.user = {
      phone: null,
      passwordSMS: null,
      name: null,
      email: null,
      password: null,
      numberCard: "",
      cardMonth: "",
      cardYear: "",
      passwordCard: '',
    }
    this.activeNextRegisterCard = false;
    this.timer = null;
  }
	subscribe (render) {
    this.notify = render;
    this.notify();
  }
  hidePartCard()
  {
    return ('************' + this.user.numberCard.slice(-4));
  }
  validationPasswordCard(e)
  {
    if (!isNaN(e.target.value))
    {
      this.user.passwordCard = e.target.value;
      localStorage.setItem("passwordCard", this.user.passwordCard);
      this.notify();
    }
  }
  validateNumberCard(e)
  {
    if (!isNaN(e.target.value))
    {
      this.user.numberCard = e.target.value;
      localStorage.setItem("numberCard", this.user.numberCard);      
      this.isCompleteRegisterCard();
      this.notify();
    }
  }
  getCardMonth(e)
  {
    let month = parseInt(e.target.value);
    if(!isNaN(month))
    {
        if((month > 0) && (month < 13))
        {
          this.user.cardMonth = month;
          this.isCompleteRegisterCard();
          console.log(month);
          this.notify();
        } 
    }
    this.notify();
  }
  getCardYear(e)
  {
    let year = parseInt(e.target.value);
    if(!isNaN(year))
    {
      if((year > 16) && (year > 0))
      {
        this.user.cardYear = e.target.value;
        this.isCompleteRegisterCard();
        this.notify();
      } 
    }
  }
  isCompleteRegisterCard()
  {
    if((this.user.numberCard.length == 16) && (this.user.cardMonth.length == 2) && (this.user.cardYear.length == 2))
    {
      this.activeNextRegisterCard = true;
    }
  }
  saveInfo()
  {
    localStorage.setItem("user1", JSON.stringify(this.user));
    let guardado = localStorage.getItem('user1');
    guardado = JSON.parse(guardado);
    console.log('objetoObtenido: ', guardado.passwordCard);
  }
}

export default YapeModel;