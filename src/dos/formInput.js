import React, { Component,Fragment } from 'react'
export default class FormInput extends Component {

    state = {
              nom:'',
              ville:'',
              age:'',
             item:[]
        }
    onChange = (event) => {
                this.setState({
                    [event.target.name] : event.target.value
                        });
}
onSubmi = (event) => {
                event.preventDefault();
                this.setState({
                        nom:'',
                        age:'',
                        ville:'',
                        item : [...this.state.item,{nom: this.state.nom, age: this.state.age, ville: this.state.ville}]
});
        }
    renderCard =()=>{
            return this.state.item.map((dit,index) => {
                    return( 
                    <div key={index} className="card mb-3">
                        <div className="card-body">
                              <h1>{dit.nom}</h1>
                              <hr></hr>
                              <p>vous aviez {dit.age} ans.</p>
                              <p>vous habitez {dit.ville}.</p>
                        </div>
                   </div> 
                    )
                    })

}
    render() {
        return (
           <Fragment>
                   <div className="card my-3">
                      <div className="card-header">Register pour la presence</div>
                      <div className="card-body">

                        <form onSubmit={this.onSubmi}>
                            <div class="form-group">
                                <label htmlFor="nom">Nom</label>
                                <input type="text" onChange={this.onChange} 
                                    className="form-control form-control-lg"
                                    name="nom"
                                ></input>
                            </div>
                           <div class="form-group">
                               <label htmlFor="age">Age</label>
                               <input type="text" onChange={this.onChange} 
                                   className="form-control form-control-lg"
                                   name="age"
                               ></input>
                           </div>
                           <div class="form-group">
                               <label htmlFor="ville">Ville</label>
                               <input type="text" onChange={this.onChange} 
                                   className="form-control form-control-lg"
                                   name="ville"
                               ></input>
                           </div>
                            <button>cliquer pour ajouter</button>                      
                        </form>
                     </div>
                    </div>
                     {this.renderCard()} 
            </Fragment>
           
           
        )
    }
}
