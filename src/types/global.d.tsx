

export { };

declare global {
   

    type dbUserData = {
        id: string;
        clerkId: number;
        name: string;
        email: string;
        projects?: [];
    }

    // type Manufacturer = {
    //     manufacturer_id: number,
    //     name: string,
    //     published: boolean;
    //     url_title: string;
    //     modified_date: string;
    // }


    
    // type Featured = AssociatedContent & FeaturedPage & {
    //     featured_id: number;
    //     article_id?: number;
    //     course_id?: number;
    //     course_type: string;
    //     non_ce_course: string;
    //     webinar_id?: number;
    //     webinar_date: string;
    //     video_id?: number;
    //     event_id?: number;
    //     fellowship_id?: number;
    //     url_title: string;
    //     event_date?: string;
    //     event_end_date?: string;
    //     event_max_attendees?: string;
    //     event_city?: string;
    //     event_state?: string;
    //     event_country?: string;
    //     external_event_id: number;
    //     external_link: string;
    //     external_event_date: string;
    //     image_link?: string[];
    //     img_url?: string;
    //     expiration_date: string;
    //     language_id: number;
    //     language?: {
    //         language_id: number;
    //         language_name: string;
    //     }
    //     stat_name?: string;
    //     stat_value?: string;
    //     event_url?: string;
    //     website_url_title?: string;
    //     course_link?: string;
    //     presentation_type?: string;
    //     credit_hours?: string;
    //     create_date?: string;
    //     modified_date?: string;
    //     published?: boolean;
    //     requires_premium?: boolean;
    //     custom_presenters?: string;
    //     ExternalContributor?: string[];
    // }

  
}