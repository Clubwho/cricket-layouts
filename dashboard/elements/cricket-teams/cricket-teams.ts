import {Teams} from '../../../src/types/schemas/teams';

const {customElement} = Polymer.decorators;
const teams = nodecg.Replicant<Teams[]>('teams');

@customElement('cricket-teams')
export default class CricketTeams extends Polymer.Element {
    ready() {
		super.ready();

		teams.on('change', newVal =>{
			(this.$.typeaheadBatter as any).items = newVal;
			(this.$.typeaheadBowlers as any).items = newVal;
		});
	}

	_updateFiles(){
		nodecg.sendMessage('updateTeamFiles');
	}

	SwapTeams(){
		// https://stackoverflow.com/questions/16201656/how-to-swap-two-variables-in-javascript
		(this.$.typeaheadBowlers as any).selectedItem = [(this.$.typeaheadBatter as any).selectedItem, (this.$.typeaheadBatter as any).selectedItem = (this.$.typeaheadBowlers as any).selectedItem][0]
	}

	ConfirmTeams(){
		nodecg.sendMessage('newInnings', [(this.$.typeaheadBowlers as any).selectedItem, (this.$.typeaheadBatter as any).selectedItem]);
	}
}