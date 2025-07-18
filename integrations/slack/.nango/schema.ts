// ---------------------------
// This file was generated by Nango (v0.62.0)
// You can version this file
// ---------------------------

export interface SlackUser {
    id: string;
    team_id: string;
    name: string;
    deleted: boolean;
    tz: string;
    tz_label: string;
    tz_offset: number;
    profile: {
        avatar_hash: string;
        real_name: string | null;
        display_name: string | null;
        real_name_normalized: string | null;
        display_name_normalized: string | null;
        email: string | null;
        image_original: string | null | undefined;
    };
    is_admin: boolean;
    is_owner: boolean;
    is_primary_owner: boolean;
    is_restricted: boolean;
    is_ultra_restricted: boolean;
    is_bot: boolean;
    updated: number;
    is_app_user: boolean;
    raw_json: string;
}

export interface SlackChannel {
    id: string;
    name: string;
    is_channel: boolean;
    is_group: boolean;
    is_im: boolean;
    created: number;
    creator: string;
    is_archived: boolean;
    is_general: boolean;
    name_normalized: string;
    is_shared: boolean;
    is_private: boolean;
    is_mpim: boolean;
    updated: number;
    num_members: number;
    raw_json: string;
}

export interface SlackMessage {
    id: string;
    ts: string;
    channel_id: string;
    thread_ts: string | null;
    app_id: string | null;
    bot_id: string | null;
    display_as_bot: boolean | null;
    is_locked: boolean | null;
    metadata: { event_type: string };
    parent_user_id: string | null;
    subtype: string | null;
    text: string | null;
    topic: string | null;
    user_id: string | null;
    raw_json: string;
}

export interface SlackMessageReply {
    id: string;
    ts: string;
    channel_id: string;
    thread_ts: string | null;
    app_id: string | null;
    bot_id: string | null;
    display_as_bot: boolean | null;
    is_locked: boolean | null;
    metadata: { event_type: string };
    parent_user_id: string | null;
    subtype: string | null;
    text: string | null;
    topic: string | null;
    user_id: string | null;
    root: { message_id: string | null; ts: string };
    raw_json: string;
}

export interface SlackMessageReaction {
    id: string;
    message_ts: string;
    thread_ts: string;
    channel_id: string;
    user_id: string;
    reaction_name: string;
}

export interface SendMessageInput {
    channel: string;
    text: string;
}

export interface SendMessageOutput {
    ok: boolean;
    channel?: string | undefined;
    ts?: string | undefined;
    message?: string | undefined;
    warning?: string | undefined;
    error?: string | undefined;
    raw_json: string;
}
