import React from 'react'
import '../css/Table.css'
import DataTable from 'react-data-table-component';

const TableResult = ({data}) => {

    const columnsTweets = [
        {
            name: 'No-hashtag',
            selector: 'hashtag',
            sortable: false,
        },
        {
            name: 'No-mention',
            selector: 'mention',
            sortable: false,
        },
        {
            name: 'No-retweet',
            selector: 'retweet',
            sortable: false,
        }
    ];
  
    const columnsProfiles = [
        {
            name: 'Profile Id',
            selector: 'id_user',
            sortable: false,
        },
        {
            name: 'Tweet Id',
            selector: 'tweet_id',
            sortable: false,
        },
        {
            name: 'Reteweeted',
            selector: 'Nomber_ret',
            sortable: false,
        },
        {
            name: 'Cosine',
            selector: 'cosine',
            sortable: false,
        },
        {
            name: 'Jaccard',
            selector: 'jaccard',
            sortable: false,
        },
        {
            name: 'Pearson',
            selector: 'pearson',
            sortable: false,
        },
    ];
    let jsonData = JSON.parse(data);
    
    let whichCase = (jsonData) ? 
                (jsonData.hasOwnProperty('users') ? 1 
                    : 
                    (jsonData.hasOwnProperty('Reteweet') ? 2 
                    : -1)) 
                : -1;

    let dataSpam = null;
    let dataNoSpam = null;
    let dataProfiles = null;
    let tableTitle = ""
    if(jsonData && whichCase === 2) {
        tableTitle = "Similar spam tweets"
        dataSpam = [
            {   id: 1,
                hashtag: jsonData.hashtagCount.cnt,
                mention: jsonData.mentionCount.cnt,
                retweet :jsonData.Reteweet.cnt 
            }
        ] ;
        dataNoSpam = [
            {   id: 1,
                hashtag: jsonData.hashtagCount.nscnt,
                mention: jsonData.mentionCount.nscnt,
                retweet :jsonData.Reteweet.nscnt 
                }
        ];
    }else if(jsonData && whichCase === 1){
        tableTitle = "similar malicious profile";
        dataProfiles = jsonData.users;
    }

    return (
        <div className="table-container">
            {
                (whichCase === -1) ? 
                    (<h3>No data to display</h3>) :
                         ((whichCase === 1) ? 
                            (<DataTable title={tableTitle}
                                        columns={columnsProfiles}
                                        data={dataProfiles} />)  
                                : (
                                    <div>
                                        <DataTable
                                            title={tableTitle}
                                            columns={columnsTweets}
                                            data={dataSpam}
                                        />
                                        <DataTable
                                            columns={columnsTweets}
                                            data={dataNoSpam}
                                            />
                                    </div>
                                    )
                                )
            }
            
        </div>
    );
}


export default TableResult;