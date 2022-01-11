import React from 'react'

export default function Home() {
    return (
        <section>
        <div className="row_home">
            <div className="overskrift_home">
            Stabben
            </div>

            <div className="col-lg-4 ansatt-item boxnr1" style={{padding: "25px"}}>
            <div className="ansatt-item-image imgborder100">
                <div id="rune_box">
                <div className="img_rune"><img src="/images/rune.jpg" />
                </div>
                <div className="ansatt-item-box">
                <div className="ansatt-item-name">
                    Rolf Karlsson
                </div>
                <div className="ansatt-item-title">
                    Daglig leder
                </div>
                <div className="ansatt-item-summary">
                    <p className="rolf_tekst">
                    Lang og bred erfaring fra mange områder 
                    innen IKT og IKT ledelse. Kvalifikasjoner 
                    innen IT design, arkitektur, prosjektledelse, 
                    agile prosesser, produkt- og systemutvikling. 
                    Tidligere vært utvikler/programmerer og DBA. 
                    Spesiell erfaring med integrasjon av interne 
                    og eksterne datakilder som gjøres tilgjengelig 
                    for et stort antall brukere
                    </p>
                </div>
                </div>
                
                </div>
            </div>
            </div>

            <div className="col-lg-4 ansatt-item boxnr1" style={{padding: "25px"}}>
            <div className="ansatt-item-image imgborder100">
                <div id="sem-box">
                <div className="img_sem"><img src="/images/rune.jpg" />
                </div>
                <div className="ansatt-item-box">
                <div className="ansatt-item-name">
                    Rolf Karlsson
                </div>
                <div className="ansatt-item-title">
                    Daglig leder
                </div>
                <div className="ansatt-item-summary">
                    <p className="sem_tekst">
                    Lang og bred erfaring fra mange områder 
                    innen IKT og IKT ledelse. Kvalifikasjoner 
                    innen IT design, arkitektur, prosjektledelse, 
                    agile prosesser, produkt- og systemutvikling. 
                    Tidligere vært utvikler/programmerer og DBA. 
                    Spesiell erfaring med integrasjon av interne 
                    og eksterne datakilder som gjøres tilgjengelig 
                    for et stort antall brukere
                    </p>
                </div>
                </div>
                </div>

            </div>
            </div>
        </div>
        </section>
    )
}
