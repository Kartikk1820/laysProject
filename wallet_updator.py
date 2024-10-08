from database import *
import logging

with open('./wallet_updator.log','a') as file:
    pass

# Initialize logging
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler("./wallet_updator.log"),  # Log to specified file
        logging.StreamHandler()  # Log to console (optional)
    ]
)

def update_wallets_rate():
    all_users = get_all_user_id()
    logging.info(f"Found {len(all_users)} users.")

    for user_id in all_users:
        # This loop updates the wallet for schemes
        all_active_scheme = get_active_schemes_for_user(user_id)
        income_rate = 0
        logging.debug(f"Processing user ID: {user_id} with {len(all_active_scheme)} active schemes.")

        for scheme in all_active_scheme:
            rate = scheme["daily_rate"]
            initial_deposit = scheme["initial_deposit"]
            income_rate += rate * initial_deposit

            time_left = get_time_left(scheme["scheme_id"], user_id) 
            logging.debug(f"Scheme ID: {scheme['scheme_id']} - Daily Rate: {rate}, Initial Deposit: {initial_deposit}, Time Left: {time_left}")

            time_left -= 1
            update_scheme_time_left(scheme["scheme_id"], time_left)

        update_wallet_income_rate(user_id, income_rate)
        logging.info(f"Updated income rate for user ID {user_id}: {income_rate}")

    # for user_id in all_users:
    # # This loop updates for each level_1 user
    #     income_rate = 0
    #     level_1_team = get_level_1_team(user_id)
    #     if not level_1_team:
    #         logging.debug(f"No level 1 team found for user ID: {user_id}")
    #         continue

    #     level_1_ids = [user['id'] for user in level_1_team]
    #     logging.debug(f"User ID {user_id} has level 1 team IDs: {level_1_ids}")

    #     for team_user_id in level_1_ids:
    #         logging.debug(f"Processing team user ID: {team_user_id}")
    #         team_user_wallet_income = get_wallet_income_rate(team_user_id)
    #         income_rate += team_user_wallet_income * 0.32

    #     update_wallet_income_rate(user_id, income_rate)
    #     logging.info(f"Updated level 1 income rate for user ID {user_id}: {income_rate}")

def update_wallets_periodically():
    logging.info("Starting wallet update process.")
    try:
        update_wallets_rate()
        for user_id in get_all_user_id():
            income_rate = get_wallet_income_rate(user_id)
            record_payment(payer_id="scheme", receiver_id=user_id, amount=income_rate, is_admin=True)
            logging.info(f"Recorded payment for user ID {user_id}: Amount {income_rate}")
    except Exception as e:
        logging.error(f"Error during wallet update process: {e}")


def run_worker():
    import time
    from apscheduler.schedulers.background import BackgroundScheduler

    
    logging.getLogger('apscheduler').setLevel(logging.DEBUG)

    scheduler = BackgroundScheduler()

    try:
        # Schedule the job
        scheduler.add_job(update_wallets_periodically, 'interval', days=1)
        scheduler.start()  # Start the scheduler
        logging.info("Scheduler started.")

        # Keep the script running
        while True:
            time.sleep(1)
    except (KeyboardInterrupt, SystemExit):
        if scheduler.running:
            logging.info("Shutting down the scheduler.")
            scheduler.shutdown()
    except Exception as e:
        logging.error(f"An unexpected error occurred: {e}")






if __name__ == '__main__':
    try:
        update_wallets_periodically()
        # run_worker()
    except Exception as e:
        logging.error(f"An unexpected error occurred: {e}")
