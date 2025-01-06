

export default function Bio() {

    const about_text = [
        "ADDO Company",
        "give. serve. inspire.",
    ];

    return (
        <>
            <section className='header'>
                <div className='quote'>
                    {
                        about_text.map((text) => (
                            <>
                                <p>
                                    {text}
                                </p>
                            </>
                        ))
                    }
                </div>
            </section>
        </>
    )
}