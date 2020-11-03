import React, { Component } from 'react';
import TrackList from '../TrackList/TrackList';
import './PlayList.css';

class PlayList extends Component {
    constructor(props) {
        super(props);
    
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    
    handleNameChange (event) {
        this.props.onNameChange(event.target.value);
        
    }
    render() {
        return (
            <div className="Playlist">
                <input defaultValue={"New Playlist"} onChange={this.handleNameChange}/>
                <TrackList tracks={this.props.playListTracks}
                onRemove ={this.props.onRemove}
                isRemoval={true}/>
                <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
          </div>
        )
    }
}

export default PlayList
